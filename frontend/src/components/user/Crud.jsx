import React, { Component } from 'react';
import axios from 'axios';
import Main from '../template/Main';

const baseUrl = 'http://localhost:3001/users';
const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuário: Incluir, exibir, alterar e deletar.'
}

const initialState = {
    user: { nome: '', email: '' },
    list: []
}


export default class UserCrud extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl)
            .then(res => {
                this.setState({ list: res.data })
            })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" className="form-control"
                                name="nome"
                                id="nome" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                id="email" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary">Salvar</button>
                        <button className="btn btn-secondary ml-2">Cancelar</button>
                    </div>
                </div>
            </div>
        )
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return (
            this.state.list.map(user => {
                return (
                    <tr key={user.id}>{user.id}
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <button className="btn btn-warning">
                                <i className="fa fa-pencil"></i>
                            </button>
                            <button className="btn btn-danger ml-2">
                                <i className="fa fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                )
            })
        )
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}
