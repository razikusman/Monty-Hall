namespace Monty_Hall_WebAPI.Models
{
    public class apiResult : HttpResponseMessage
    {
        public MontyHallSimulations MontyHallSimulations { get; set; }
    }
}
