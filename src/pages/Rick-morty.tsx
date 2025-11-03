import { useState } from 'react';
import CharacterList from '@/components/character/characterList';
import CharacterDialog from '@/components/character/characterDialog';
import { Character } from '@/types/rickMortyTypes';

function Characters() {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

//   const handleViewDetails = (character: Character) => {
//     setSelectedCharacter(character);
//     setDialogOpen(true);
//     console.log(character);
//   };

  const handleCloseDialog = () => {
    setDialogOpen(false);    
    setTimeout(() => setSelectedCharacter(null), 300);
  };

  return (
    <div className="min-h-screen bg-background">      
      <header className="border-b">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold tracking-tight">
            Rick and Morty
          </h1>
          <p className="text-muted-foreground mt-2">
            Explora todos los personajes de la serie
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <CharacterList />
      </main>

      {/* Dialog para detalles */}
      {selectedCharacter && (
        <CharacterDialog
          character={selectedCharacter}
          open={dialogOpen}
          onOpenChange={handleCloseDialog}
        />
      )}
    </div>
  );
}

export default Characters;