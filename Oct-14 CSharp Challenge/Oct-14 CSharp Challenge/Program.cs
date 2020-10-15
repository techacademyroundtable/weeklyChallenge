using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Oct_14_CSharp_Challenge
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr = new int[] {4, 5, 2, 6, 1};
            missingNum(arr);
            Console.ReadLine();
        }

        static void missingNum(int[] num)
        {
            Array.Sort(num);
            foreach (int i in num) {
                if (!num.Contains(i + 1) && i != num.Length + 1){
                    Console.WriteLine(i + 1);
                };
            }
            
            
        }
    }
}
