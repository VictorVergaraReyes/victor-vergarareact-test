import { Character } from '@/types/rickMortyTypes';

interface FetchCharactersParams {
  page?: number;
  status?: string;
}

interface FetchCharactersResponse {
  results: Character[];
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
}

export const fetchCharacters = async (
  params: FetchCharactersParams = {}
): Promise<Character[]> => {
  const { page = 1, status = 'all' } = params;

  try {
    const statusQuery = status !== 'all' ? `&status=${status}` : '';
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}${statusQuery}`
    );

    if (!response.ok) {
      throw new Error('Error fetching characters');
    }

    const data: FetchCharactersResponse = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};
