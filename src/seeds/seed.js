const data=[
    {
        language:`#include <stdio.h>
int main()
{
    char a = 30;
    char b = 40;
    char c = 10;
    char d = (a * b) / c;
    printf ("%d ", d);
    return 0;
}`,
        options:[
            {text:"C++",correct:false},
            {text:"C",correct:true},
            {text:"Python",correct:false},
            {text:"Java",correct:false}
        ]        
    },
    {
        language:`#include <strstream>
        #include <iostream>
        using namespace std;
        int main()
        {
          char *p;
          ostrstream outs;                      
          outs << "C++ array-based I/O ";
          outs << -10 << hex << " ";
          outs.setf(ios::showbase);
          outs << 100 << ends;
          p = outs.str();                        
          cout << p;
          return 0;
        }`,
        options:[
            {text:"C++",correct:true},
            {text:"C",correct:false},
            {text:"Python",correct:false},
            {text:"Java",correct:false}
        ] 
    },
    {
        language:`class PalindromeExample{  
            public static void main(String args[]){  
             int r,sum=0,temp;    
             int n=454;  
             
             temp=n;    
             while(n>0){    
              r=n%10;    
              sum=(sum*10)+r;    
              n=n/10;    
             }    
             if(temp==sum)    
              System.out.println("palindrome number ");    
             else    
              System.out.println("not palindrome");    
           }  
           }  `,
        options:[
            {text:"C++",correct:false},
            {text:"C",correct:false},
            {text:"Python",correct:false},
            {text:"Java",correct:true}
        ] 
    },
    {
        language:`
        num1 = input('Enter first number: ')
        num2 = input('Enter second number: ')
        
        sum = float(num1) + float(num2)
        
        print('The sum of {0} and {1} is {2}'.format(num1, num2, sum))`,
        options:[
            {text:"C++",correct:false},
            {text:"C",correct:false},
            {text:"Python",correct:true},
            {text:"Java",correct:false}
        ] 
    },
    {
        language:`
        <?php
        $name = "Quincy";
        echo "Hi! My name is " . $name . "<br>";
        echo "Hi! My name is " . $NAME . "<br>";
        echo "Hi! My name is " . $NaMe . "<br>";
        ?>`,
        options:[
            {text:"javascript",correct:false},
            {text:"C",correct:false},
            {text:"php",correct:true},
            {text:"HTML",correct:false}
        ] 
    },
    {
        language:`
        function reverseString(str) {
            let newString = "";
            for (let i = str.length - 1; i >= 0; i--) {
                newString += str[i];
            }
            return newString;
        }
        const string = prompt('Enter a string: ');
        const result = reverseString(string);
        console.log(result);`,
        options:[
            {text:"javascript",correct:true},
            {text:"C",correct:false},
            {text:"php",correct:false},
            {text:"HTML",correct:false}
        ] 
    },
    {
        language:`
        <html>
        <head>
            <title>Body bgcolor Attribute example</title>
        </head>
        <body bgcolor="#afafaf">
            <h1>This webpage has colored background.</h1>
        </body>
        </html>`,
        options:[
            {text:"javascript",correct:false},
            {text:"C",correct:false},
            {text:"php",correct:false},
            {text:"HTML",correct:true}
        ] 
    },
    {
        language:`
        using System;
        using System.Collections.Generic;
        using System.Linq;
        using System.Text;
        using System.Threading.Tasks;

        namespace Test
        {
            class Program
            {
                static void Main(string[] args)
                {
                    string message = "Hello World!!";

                    Console.WriteLine(message);
                }
            }
        }`,
        options:[
            {text:"javascript",correct:false},
            {text:"C#",correct:true},
            {text:"php",correct:false},
            {text:"HTML",correct:false}
        ] 
    },
    {
        language:`
        fun main(args: Array<String>) {

            val first: Int = 10
            val second: Int = 20
        
            val sum = first + second
        
            println("The sum is: $sum")
        }`,
        options:[
            {text:"javascript",correct:false},
            {text:"C",correct:false},
            {text:"php",correct:false},
            {text:"kotlin",correct:true}
        ] 
    },
    {
        language:`
        $(document).ready(function(){
            $("p").click(function(){
              $(this).hide();
            });
          });`,
        options:[
            {text:"javascript",correct:false},
            {text:"jquery",correct:true},
            {text:"php",correct:false},
            {text:"kotlin",correct:false}
        ] 
    },
]
export default data;
