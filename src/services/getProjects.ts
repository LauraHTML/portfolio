    async function getProjects() {
      try {
        const response = await fetch('api/projects');
        if (!response.ok) {
          const message = `Um erro ocorreu: ${response.statusText}`;
          console.error(message);
          return;
        }
        const projetos = await response.json();
        return projetos;
      } catch (error) {
        console.error("Erro ao buscar projetos:", error);
    }
    getProjects();

  }