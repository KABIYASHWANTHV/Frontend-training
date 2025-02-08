function Message()
{
    const name='';
    if(name)
        return <h2>Hello {name}</h2>
    return <h2>Hello world!</h2>
}
export default Message;