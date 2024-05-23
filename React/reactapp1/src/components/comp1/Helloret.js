import Second from "../comp2/Second"

function Helloret(props){
    console.log(props,100)
    /* let ret={
        names:props.data[1],
        imgs:[
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Metf2VDmhw-P3Es8y4UVQQHaHa%26pid%3DApi&f=1&ipt=9465ae369cbb42034a00737a59e100c020b5f1377516c0e38d4dbc506a28daea&ipo=images",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2d59nbFe6FP2JS_n2mthMgHaDM%26pid%3DApi&f=1&ipt=e545bf853d97bd4a2e87a2bb86e502f39c6f1334d7c1b4ed12bbdc138783cbda&ipo=images",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.XLaoQmpz1CdxjSukHe0DngHaF7%26pid%3DApi&f=1&ipt=f07829da4f45e385a3938d87696a37450212ea33773c8210226035629b4efe99&ipo=images"
        ]
    } */
    let names=props.data[1]
    let rett=[
        {
            name:names[0],
            img:            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2d59nbFe6FP2JS_n2mthMgHaDM%26pid%3DApi&f=1&ipt=e545bf853d97bd4a2e87a2bb86e502f39c6f1334d7c1b4ed12bbdc138783cbda&ipo=images"
        },
        {
            name:names[1],
            img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Metf2VDmhw-P3Es8y4UVQQHaHa%26pid%3DApi&f=1&ipt=9465ae369cbb42034a00737a59e100c020b5f1377516c0e38d4dbc506a28daea&ipo=images"
        },
        {
            name:names[2],
            img:  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.XLaoQmpz1CdxjSukHe0DngHaF7%26pid%3DApi&f=1&ipt=f07829da4f45e385a3938d87696a37450212ea33773c8210226035629b4efe99&ipo=images"
        }
    ]
    return(
        <div>
            <h1>CIAOOOOOO {props.data[0]}</h1>
            {/* <Second data={ret}/> */}
            {
                rett.map((ele,key) => <Second data={ele} key={key}/>)
            }
        </div>
    )
}
export default Helloret
//not connected to root or the heirarchy
//this must be imported in its parent comp 