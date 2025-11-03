import { Character } from '@/types/rickMortyTypes';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CharacterDialogProps {
  character: Character;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function CharacterDialog({ character, open, onOpenChange }: CharacterDialogProps) {
  const getStatusColor = (status: Character['status']): string => {
    switch(status) {
      case 'Alive': return 'bg-green-500 hover:bg-green-600';
      case 'Dead': return 'bg-red-500 hover:bg-red-600';
      default: return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh]">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src={character.image} alt={character.name} />
              <AvatarFallback>{character.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <DialogTitle className="text-2xl">{character.name}</DialogTitle>
              <DialogDescription className="text-base">
                {character.species} - {character.gender}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        
        <Separator />
        
        <ScrollArea className="max-h-[60vh]">
          <div className="space-y-6 pr-4">
            <div>
              <h3 className="font-semibold text-sm text-muted-foreground mb-2">
                ESTADO
              </h3>
              <Badge className={getStatusColor(character.status)}>
                {character.status}
              </Badge>
            </div>

            {character.type && (
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground mb-2">
                  TIPO
                </h3>
                <p>{character.type}</p>
              </div>
            )}
            
            <div>
              <h3 className="font-semibold text-sm text-muted-foreground mb-2">
                ORIGEN
              </h3>
              <p className="text-foreground">{character.origin.name}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-sm text-muted-foreground mb-2">
                UBICACIÓN ACTUAL
              </h3>
              <p className="text-foreground">{character.location.name}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-sm text-muted-foreground mb-2">
                EPISODIOS
              </h3>
              <p className="text-foreground">
                Aparece en <strong>{character.episode.length}</strong> episodios
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-sm text-muted-foreground mb-2">
                FECHA DE CREACIÓN
              </h3>
              <p className="text-foreground">
                {new Date(character.created).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default CharacterDialog;
