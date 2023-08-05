using Microsoft.AspNetCore.Mvc;
using Monty_Hall_WebAPI.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Strudy_API.Data;
using System.Net;
using System.Text;
using System.Text.Json;
using System.Web.Http;

namespace Monty_Hall_WebAPI.Controllers
{
    public class BaseAPI : Controller
    {
        protected IActionResult ToJson(dynamic obj)
        {
            apiResult result = new apiResult();
            result.StatusCode = HttpStatusCode.OK;
            result.MontyHallSimulations = obj;
            return Ok(JsonConvert.SerializeObject(result));
        }
    }
}
