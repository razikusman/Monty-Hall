using Microsoft.EntityFrameworkCore;
using Monty_Hall_WebAPI.Models;
using System.Collections.Generic;
using System.Reflection.Emit;

namespace Strudy_API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<MontyHallSimulations> Simulations { get; set; }
        // Add more DbSet properties for other models if needed

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Define relationships, indexes, and other configurations here if needed
        }
    }
    
}
