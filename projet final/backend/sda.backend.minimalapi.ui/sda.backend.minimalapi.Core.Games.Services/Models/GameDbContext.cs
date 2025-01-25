using Microsoft.EntityFrameworkCore;
using sda.backend.minimalapi.Core.Games.Models;

namespace sda.backend.minimalapi.Core.Games.Services.Models
{
    public class GameDbContext : DbContext
    {
        #region Properties
        public DbSet<Game> Games { get; set; }
        #endregion
    }
}
