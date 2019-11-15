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
    public class Checker
    {
        public bool King = false;
        public Color Color;
        public Checker(Color color)
        {
            Color = color;
        }
    }
}
