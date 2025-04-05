// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Dados de exemplo para mangás populares
    const popularMangas = [
        {
            id: 1,
            title: "Solo Leveling",
            cover: "https://slimeread.com/ler/10654/cap-01g",
            chapter: "Capítulo 1"
         }
    // Dados de exemplo para atualizações recentes
    const recentUpdates = [
        {
            id: 1,
            title: "Solo Leveling",
            cover: "https://slimeread.com/ler/10654/cap-01,
            chapter: "Capítulo 1",
            }
            // Adiciona evento de clique para redirecionar para a página do mangá
            mangaCard.addEventListener('click', () => {
                window.location.href = `manga.html?id=${manga.id}`;
            });
            
            mangaGrid.appendChild(mangaCard);
        });
    