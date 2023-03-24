/*  Primitive and object in javascript */

        // N N B B S S U

        // N-NULL
        // N-NUMBER
        // B-BOOLEAN
        // B-BIGINT
        // S-STRING
        // S-SYMBOL
        // U- UNDEFINED

        let a=null;
        let b=32;
        let c=true;
        let d=BigInt("34")+BigInt("66");
        let e="Myself Atmaj Mishra";
        let f=Symbol("Atmaj");
        let g=undefined;

        console.log(a,'\n',b,"\n",c,"\n",d,"\n",e,"\n",f,"\n",g);

        //  \n is a escape sequence known for moving the printing cursor to the next line

        console.log(typeof(a), typeof(b), typeof(c), typeof(d), typeof(e), typeof(f), typeof(g));

        // OBJECTS IN JAVASCRIPT

          // Stores keyvalue form
          // if you output something which is present it will give its value else undefined


          const obj={
            "Atmaj":55,
            "Rohan":"atr",
            "Mom":true


          }

          console.log(obj["Atmaj"]);
          console.log(obj["stef"]);

          console.log(typeof(obj["Atmaj"]));
          console.log(typeof(obj["stef"]));
