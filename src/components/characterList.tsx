import { useState, useEffect } from 'react';
import CharacterCard from './characterCard';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Character } from '@/types/rickMortyTypes';  


function CharacterList() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchCharacters();
  }, [page, status]);

  const fetchCharacters = async () => {
    setLoading(true);
    try {
      const statusQuery = status !== 'all' ? `&status=${status}` : '';
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}${statusQuery}`
      );
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.error('Error fetching characters:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCharacters = characters.filter(char =>
    char.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Filtros */}
      <div className="flex flex-col md:flex-row gap-4">
        <Input
          placeholder="Buscar personajes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1"
        />
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="alive">Vivos</SelectItem>
            <SelectItem value="dead">Muertos</SelectItem>
            <SelectItem value="unknown">Desconocido</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Grid de personajes */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <Card key={i} className="w-full">
              <CardHeader>
                <Skeleton className="w-16 h-16 rounded-full" />
                <Skeleton className="h-4 w-full" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-20 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCharacters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}

      {/* Paginación */}
      <div className="flex justify-center gap-2">
        <Button
          variant="outline"
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Anterior
        </Button>
        <span className="flex items-center px-4">Página {page}</span>
        <Button
          variant="outline"
          onClick={() => setPage(p => p + 1)}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
}

export default CharacterList;