import { useForm } from "react-hook-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type ProductFormData = {
  titulo: string;
  precio: string;
  descripcion: string;
  imagen: string;
};

function ProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ProductFormData>();

  const onSubmit = (data: ProductFormData) => {
    console.log("Datos del formulario:", data);    
    alert("Formulario enviado con éxito");
    reset();
  };

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Nuevo Producto</CardTitle>
          <CardDescription>
            Complete el formulario para agregar un nuevo producto
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Ttulo */}
            <div className="space-y-2">
              <Label htmlFor="titulo">Título</Label>
              <Input
                id="titulo"
                type="text"
                placeholder="Ingrese el título del producto"
                {...register("titulo", {
                  required: "El título es requerido",
                  pattern: {
                    value: /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+$/,
                    message: "El título solo puede contener letras"
                  },
                  minLength: {
                    value: 3,
                    message: "El título debe tener al menos 3 caracteres"
                  }
                })}
              />
              {errors.titulo && (
                <p className="text-sm text-red-500">{errors.titulo.message}</p>
              )}
            </div>

            {/* Precio */}
            <div className="space-y-2">
              <Label htmlFor="precio">Precio</Label>
              <Input
                id="precio"
                type="text"
                placeholder="Ingrese el precio (ej: 99.99)"
                {...register("precio", {
                  required: "El precio es requerido",
                  pattern: {
                    value: /^\d+(\.\d{1,2})?$/,
                    message: "El precio debe ser un número válido (ej: 99.99)"
                  },
                  validate: {
                    positive: (value) => parseFloat(value) > 0 || "El precio debe ser mayor a 0"
                  }
                })}
              />
              {errors.precio && (
                <p className="text-sm text-red-500">{errors.precio.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="descripcion">Descripción</Label>
              <Textarea
                id="descripcion"
                placeholder="Ingrese la descripción del producto"
                rows={4}
                {...register("descripcion", {
                  required: "La descripción es requerida",
                  pattern: {
                    value: /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+$/,
                    message: "La descripción solo puede contener letras y signos de puntuación"
                  },
                  minLength: {
                    value: 10,
                    message: "La descripción debe tener al menos 10 caracteres"
                  }
                })}
              />
              {errors.descripcion && (
                <p className="text-sm text-red-500">{errors.descripcion.message}</p>
              )}
            </div>

            {/* Imagen */}
            <div className="space-y-2">
              <Label htmlFor="imagen">URL de Imagen</Label>
              <Input
                id="imagen"
                type="text"
                placeholder="Ingrese la URL de la imagen"
                {...register("imagen", {
                  required: "La URL de la imagen es requerida",
                  pattern: {
                    value: /^[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+$/,
                    message: "La URL debe contener solo caracteres alfanuméricos y caracteres válidos para URLs"
                  }
                })}
              />
              {errors.imagen && (
                <p className="text-sm text-red-500">{errors.imagen.message}</p>
              )}
            </div>

            {/* Botones */}
            <div className="flex gap-4 justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={() => reset()}
              >
                Limpiar
              </Button>
              <Button type="submit">
                Guardar Producto
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductForm;
