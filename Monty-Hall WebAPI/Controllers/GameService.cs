using Microsoft.AspNetCore.Mvc;
using Monty_Hall_WebAPI.Models;

namespace Monty_Hall_WebAPI.Controllers
{
    public class GameService : Controller
    {
        
        public MontyHallSimulations getResult(long simulations = 0, bool switchorNot = false)
        {
            MontyHallSimulations simulation = new MontyHallSimulations();

            simulation.NumberOfSimulations = simulations.ToString(); //number of simulation
            simulation.SwitchDoor = switchorNot.ToString(); // switching status 

            double winCount = 0; // initila wincount with 0

            for (int i = 0; i < simulations; i++)
            {

                //select Random winning Door
                var _winDoor = doorSelection();

                // select Random Player Choice Door
                var _playerChoiceDoor = doorSelection();

                //host opening door in Random
                var _hostOpeningDoor = doorSelection();

                //the door shouldnt be of winning or playerchoice
                while (_hostOpeningDoor == _winDoor || _hostOpeningDoor == _playerChoiceDoor)
                {
                    _hostOpeningDoor = doorSelection();
                }

                //if player choos to switch the door
                if (switchorNot == true)
                {
                    var previousechoice = _playerChoiceDoor;

                    //select a new door
                    _playerChoiceDoor = doorSelection();

                    //if previous and current are same create a new or its host selected one
                    while (_playerChoiceDoor == previousechoice || _playerChoiceDoor == _hostOpeningDoor)
                    {
                        _playerChoiceDoor = doorSelection();
                    }
                }

                //check wining or not
                winCount += _playerChoiceDoor == _winDoor ? 1 : 0;

            }

            //at the ENd of all simulation calculte percentage of win
            simulation.WinPercent = ((winCount / simulations) * 100).ToString() + "%";

            return simulation;
        }

        private int doorSelection()
        {
            //random number generator
            var _randomDoorGenerator = new Random();

            return _randomDoorGenerator.Next(1, 4);
        }
    }
}
