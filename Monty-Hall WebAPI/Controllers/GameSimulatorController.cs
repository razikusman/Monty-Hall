using Microsoft.AspNetCore.Mvc;
using Monty_Hall_WebAPI.Models;
using Monty_Hall_WebAPI.Services;
using Newtonsoft.Json;
using System.Net;
using System.Text.Json;
using System.Web.Http;

namespace Monty_Hall_WebAPI.Controllers
{
    //[ApiController]
    [Microsoft.AspNetCore.Mvc.Route("api/[controller]")]
    public class GameSimulatorController : BaseAPI
    {
        public GameSimulatorController()
        {
        }


        [Microsoft.AspNetCore.Mvc.HttpPost]
        public apiResult<IActionResult> SimulateGames(long simulations = 0, bool switchorNot = false)
        {
            try
            {
                //random number generator

                GameService gameService = new GameService();
                var simulationResult = gameService.getResult(simulations, switchorNot);


                return ToJson(simulationResult);
            }
            catch (Exception e)
            {

                return EndedWithError(e);
            }

            
        }
    }
}
