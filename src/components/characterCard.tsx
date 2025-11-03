import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function CharacterCard({ character }) {
  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'alive': return 'bg-green-500';
      case 'dead': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={character.image} alt={character.name} />
            <AvatarFallback>{character.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle>{character.name}</CardTitle>
            <CardDescription>{character.species}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge className={getStatusColor(character.status)}>
              {character.status}
            </Badge>
            <span className="text-sm text-muted-foreground">{character.gender}</span>
          </div>
          <p className="text-sm">
            <strong>Origin:</strong> {character.origin.name}
          </p>
          <p className="text-sm">
            <strong>Location:</strong> {character.location.name}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Ver detalles
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CharacterCard;