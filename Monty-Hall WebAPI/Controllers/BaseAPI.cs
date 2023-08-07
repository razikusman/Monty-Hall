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
    public class BaseAPI : ControllerBase
    {
        protected apiResult<IActionResult> result = new apiResult<IActionResult>();
        protected apiResult<IActionResult> ToJson(dynamic obj)
        {
            
            result.StatusCode = HttpStatusCode.OK;
            result.MontyHallSimulations = obj;
            var json = JsonConvert.SerializeObject(obj);
            var content = new StringContent(json, System.Text.Encoding.UTF8, "application/json");
            result.Content = content;

            return result;
        }

        protected apiResult<IActionResult> EndedWithError(Exception e) 
        {
            result.StatusCode = HttpStatusCode.BadRequest;
            return result;
        }
    }
}
