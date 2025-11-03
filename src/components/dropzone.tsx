import { Dropzone, DropzoneContent, DropzoneEmptyState } from '@/components/ui/shadcn-io/dropzone';
import { useState, useEffect } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const DropZoneComponent = () => {
  const [files, setFiles] = useState<File[] | undefined>();
  const [error, setError] = useState<string | null>(null);
  const [previews, setPreviews] = useState<string[]>([]);

  const isImageFile = (file: File): boolean => {
    // Check MIME type
    const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
    return validImageTypes.includes(file.type);
  };

  useEffect(() => {
    // Create preview URLs for uploaded files
    if (files && files.length > 0) {
      const urls = files.map(file => URL.createObjectURL(file));
      setPreviews(urls);

      // Cleanup function to revoke object URLs
      return () => {
        urls.forEach(url => URL.revokeObjectURL(url));
      };
    } else {
      setPreviews([]);
      return;
    }
  }, [files]);

  const handleDrop = (droppedFiles: File[]) => {
    setError(null);

    // Filter only image files
    const imageFiles = droppedFiles.filter(file => isImageFile(file));
    const rejectedFiles = droppedFiles.filter(file => !isImageFile(file));

    if (rejectedFiles.length > 0) {
      const rejectedNames = rejectedFiles.map(f => f.name).join(', ');
      setError(`Los siguientes archivos no son imágenes válidas y fueron rechazados: ${rejectedNames}`);
    }

    if (imageFiles.length > 0) {
      console.log('Imágenes aceptadas:', imageFiles);
      setFiles(prev => prev ? [...prev, ...imageFiles] : imageFiles);
    } else if (droppedFiles.length > 0) {
      console.log('Todos los archivos fueron rechazados');
    }
  };

  const removeImage = (index: number) => {
    if (files) {
      const newFiles = files.filter((_, i) => i !== index);
      setFiles(newFiles.length > 0 ? newFiles : undefined);
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-4">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Dropzone
        accept={{ 'image/*': ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'] }}
        maxFiles={10}
        maxSize={1024 * 1024 * 10}
        minSize={1024}
        onDrop={handleDrop}
        onError={console.error}
        src={files}
      >
        <DropzoneEmptyState />
        <DropzoneContent />
      </Dropzone>

      {previews.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Vista Previa de Imágenes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {previews.map((preview, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0 relative group">
                  <img
                    src={preview}
                    alt={files?.[index]?.name || `Preview ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
                    <Button
                      variant="destructive"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => removeImage(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="p-2 bg-gray-50">
                    <p className="text-xs text-gray-600 truncate" title={files?.[index]?.name}>
                      {files?.[index]?.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {files?.[index] ? (files[index].size / 1024).toFixed(2) : 0} KB
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default DropZoneComponent;