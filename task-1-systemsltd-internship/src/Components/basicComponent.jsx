import '../styles/basicComponent.css'

function list(props)
{
    return <li>Hello {props.listItems} </li>;
}

export default function Filler()
{
    const listItems = [
        'Pizza', 'Burger', 'Fries'
    ];

    const listedListItems = listItems.map((listItems)=>{
        return <li>{listItems}</li>
    });

    return (
        <>
            <div className="container">
                <h1 className='header'>Header Text</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nulla vulputate mattis elementum. Suspendisse sodales quam a enim vulputate laoreet. 
                Mauris porta vestibulum nisi, vitae consectetur massa volutpat quis. Donec a dignissim leo.
                </p>
                <ul>
                    {listedListItems}
                </ul>

            </div>
        </>
    )
}