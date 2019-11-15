using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace TicTacToe.Checkers
{
    public class Game
    {
        public Color turn = Color.red;
        public Checker[,] Board = new Checker[8, 8];
        public Game()
        {
            for(int i = 0; i < 8; i += 2)
            {
                //Black Checkers
                Board[i, 0] = new Checker(Color.black);
                Board[i+1, 1] = new Checker(Color.black);
                Board[i, 2] = new Checker(Color.black);

                //Red Checkers
                Board[i+1, 5] = new Checker(Color.red);
                Board[i , 6] = new Checker(Color.red);
                Board[i+1, 7] = new Checker(Color.red);
            }
        }

        public string Serialize()
        {
            string state = turn.ToString() + "\n";

        }
    }
}
