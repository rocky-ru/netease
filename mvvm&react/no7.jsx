const confirm = (content) => {
    return new Promise((resolve, reject)=>{
        const component = (
            <div>
                {content}
                <button onClick={onYes}>yes</button>
                <button onClick={onNo}>no</button>
            </div>)
        const div = document.createElement('div')
    
        const onYes = () => {
            ReactDOM.render(React.cloneElement(component, { visible: false }), div)
            ReactDOM.unmountComponentAtNode(div)
            div.remove()
            resolve(true)
        }
    
        const onNo = () => {
            ReactDOM.render(React.cloneElement(component, { visible: false }), div)
            ReactDOM.unmountComponentAtNode(div)
            div.remove()
            resolve(false)
        }
        
        document.body.appendChild(div)
        ReactDOM.render(component, div)
    })
}
