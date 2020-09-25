using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sept_26__Challenge_2
{
    class Program
    {

        static string DoubleChar(string str)
        {
            var finalStr = "";
            for (var i = 0; i < str.Length; i++)
            {
                finalStr += str[i].ToString() + str[i].ToString();
            }
            return finalStr;
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Enter a string");
            var stri = Console.ReadLine();
            Console.WriteLine(DoubleChar(stri));
            Console.Read();
        }  
    }
}
