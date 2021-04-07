import React from 'react';

class Collapse extends React.Component {
    constructor(){
        super();
        console.log(this)
        this.state = {
            showContent: false
        }

       
    }
    
    showMore = () => {
        this.setState({showContent: !this.state.showContent})
     }

     componentDidMount () {
         console.log('Component olusturuldu')
     }

     componentDidUpdate () {
          console.log('Component guncellendi')
     }

    render() {
        return (
            <div>
                <button className="btn btn-primary w-100" onClick={this.showMore} >
                   {this.props.children.props.cardTitle}
                </button>

                {
                    this.state.showContent ? (
                        <div className="collapse show">
                        {this.props.children}
                        </div>
                    ) : null
                }
               
            </div>
        );
    }
    
    
};


export default Collapse;