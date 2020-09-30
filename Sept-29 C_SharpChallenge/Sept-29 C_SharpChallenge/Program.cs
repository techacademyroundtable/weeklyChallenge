using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sept_29_C_SharpChallenge
{
    class Program
    {
        //ATM machines allow 4 or 6 digit PIN codes and 
        //    PIN codes cannot contain anything but 
        //    exactly 4 digits or exactly 6 digits.Your 
        //    task is to create a function that takes a 
        //    string and returns true if the PIN is valid
        //    and false if it's not.

        static void Main(string[] args)
        {
            Console.WriteLine("Enter your new PIN number:");
            string pin = Console.ReadLine();
            ValidatePin(pin);
            Console.Read();
        }

        public static bool ValidatePin(string pin)
        {
           if ((pin.Length == 4 || pin.Length == 6) && pin.All(char.IsDigit)) {
                Console.WriteLine("This is a valid pin");
                return true;
            }
            else
            {
                Console.WriteLine("This PIN is NOT valid");
                return false;
            }
        }
    }
}
