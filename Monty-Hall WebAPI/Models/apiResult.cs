namespace Monty_Hall_WebAPI.Models
{
    public class apiResult<T> : HttpResponseMessage
    {
        public MontyHallSimulations MontyHallSimulations { get; set; }
    }
}
