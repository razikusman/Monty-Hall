﻿namespace Monty_Hall_WebAPI.Models
{
    public class MontyHallSimulations : HttpResponseMessage
    {
        public string? NumberOfSimulations { get; set; }

        public double WinPercent { get; set;}

        public string? SwitchDoor { get; set;}
    }
}