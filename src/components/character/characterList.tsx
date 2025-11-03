import { useState, useEffect } from 'react';
import CharacterCard from './characterCard';
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationNext, PaginationLink } from "@/components/ui/pagination";
import { Character } from '@/types/rickMortyTypes';  


function CharacterList() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [sortBy, setSortBy] = useState('id');
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

  const filteredCharacters = characters
    .filter(char => char.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      switch (sortBy) {
        case 'id':
          return a.id - b.id;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'species':
          return a.species.localeCompare(b.species);
        case 'gender':
          return a.gender.localeCompare(b.gender);
        case 'created':
          return new Date(a.created).getTime() - new Date(b.created).getTime();
        default:
          return 0;
      }
    });

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
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Ordenar por" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="id">ID</SelectItem>
            <SelectItem value="name">Nombre</SelectItem>
            <SelectItem value="species">Especie</SelectItem>
            <SelectItem value="gender">Género</SelectItem>
            <SelectItem value="created">Creado</SelectItem>
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
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPage(p => Math.max(1, p - 1));
              }}
              className={page === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
            />
          </PaginationItem>
          {[...Array(5)].map((_, index) => {
            const pageNumber = page - 2 + index;
            if (pageNumber < 1) return null;
            return (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  href="#"
                  isActive={pageNumber === page}
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(pageNumber);
                  }}
                  className="cursor-pointer"
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            );
          })}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPage(p => p + 1);
              }}
              className="cursor-pointer"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default CharacterList;