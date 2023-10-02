export namespace RequestService {
  export const GET = async <T>(url: string, params?: unknown): Promise<T> => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzA1MWJlODJjZTBiNGExZDk3ZmRhOGFkNTFiMzlkZCIsInN1YiI6IjVmZmEwZjU0YTBiZTI4MDAzZThjYjQ5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c9fzzhId8l8TDQcdSNwbyZwrf2asMGX7K5QrdP7I_TE',
      },
    });

    const data = await response.json();

    return data;
  };
}
