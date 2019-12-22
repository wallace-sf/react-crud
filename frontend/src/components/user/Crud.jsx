import React, { Component } from 'react';
import axios from 'axios';
import Main from '../template/Main';

import './Crud.css';

const baseUrl = 'http://localhost:3001/users';
const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuário: Incluir, exibir, alterar e deletar.'
};
const initialState = {
    user: { name: '', email: '' },
    list: []
};

export default class UserCrud extends Component {

    constructor(props) {
        super(props)
        this.state = { ...initialState };
    }

    componentDidMount() {
        axios(baseUrl)
            .then(res => {
                this.setState({ list: res.data });
            });
    }

    load(user) {
        this.setState({ user });
    }

    clear() {
        this.setState({ user: initialState.user });
    }

    save() {
        const user = this.state.user;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${baseUrl}/${user.id}` : `${baseUrl}`;

        axios[method](url, user)
            .then(res => {
                const list = this.getUpdateList(res.data);
                this.setState({ list }, this.clear());
            });

    }

    remove(user) {
        const url = `${baseUrl}/${user.id}`;
        axios.delete(url)
            .then(res => {
                const list = this.getUpdateList(user, false);
                console.log(list)
                this.setState({ list });
            });
    }

    getUpdateList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id);

        if (add) list.unshift(user);

        return list
    }

    getUpdateField(event) {
        const user = { ...this.state.user };
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="name">Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                id="name"
                                placeholder="Digite seu nome"
                                value={this.state.user.name}
                                onChange={(e) => this.getUpdateField(e)} />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                id="email"
                                placeholder="Digite seu e-mail"
                                value={this.state.user.email}
                                onChange={(e) => this.getUpdateField(e)} />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={() => this.save()}>Salvar</button>
                        <button className="btn btn-secondary ml-2"
                            onClick={() => this.clear()}>Cancelar</button>
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
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td className="ellipsis"><span>{user.name}</span></td>
                        <td className="ellipsis"><span>{user.email}</span></td>
                        <td>
                            <button className="btn btn-warning"
                                onClick={() => this.load(user)}>
                                <i className="fa fa-pencil"></i>
                            </button>
                            <button className="btn btn-danger ml-2"
                                onClick={() => this.remove(user)}>
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
