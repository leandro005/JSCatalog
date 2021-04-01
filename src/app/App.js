import React, { Component } from 'react';

class App extends Component {

    constructor() {
        super();
        this.state = {
            titulo : '',
            description : ''
        };
        this.addCatalogo = this.addCatalogo.bind(this);
    }

    addCatalogo(e) {
        console.log(this.state);
        e.preventDefault();
    };

    render() {
        return (
            <div>
                { /* NAVIGATION */ }   
                <nav className="light-blue darken-4" >
                    <div className="container">
                        <a className="brand-logo" href= "/">MERN Catalogo</a>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addCatalogo}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input type="text" placeholder="Titulo del Catalogo"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea placeholder="Descripcion del Catalogo" className="materialize-textarea"/>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn pink darken-4">
                                            Guardar
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">
                            
                        </div>        
                    </div>    
                </div>
            </div> 
        )
    }
}

export default App;