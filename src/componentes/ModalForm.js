import React from 'react';
import { useForm } from "react-hook-form";
import ClientService from '../services/clientService'

const ModalForm = ({data = {}, closeModal = {}, att = {}}) => {
    
  const onSubmit = async (formValues) => {    
    console.log(data)
    if(Object.keys(data).length) {
        const body = { id: data.id, ...formValues }
        await  ClientService.editClient(body); 
    }
    else {
        await  ClientService.addClient(formValues); 
    }
    closeModal(false);   
    att([]); 
  }

  const closeModalByClick = (e) => {
    if( e.target.id === "modal") {
        closeModal();
    }
  }

  const { register, handleSubmit, errors } = useForm();


    return (
        <div id="modal" className="ModalForm" onClick={closeModalByClick}>
            <div className="modalConteiner">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        Nome:
                        <input 
                            type="text"
                            name="name"  
                            defaultValue={ data ? data.name : null }
                            ref={register({
                                required: "Enter your name",
                                pattern: {
                                    value: /[a-zA-Z]+/,
                                    message: "Enter a valid name",
                                },
                            })}
                        />
                    </label><br/>
                    {errors.name ? <p className="errorForm" >{errors.name.message}</p> : null}

                    <label>
                        Idade:
                        <input 
                            type="number"
                            name="age"  
                            defaultValue={ data ? data.age : null }
                            ref={register({
                                required: "Enter your age",
                            })}
                        />
                    </label><br/>
                    {errors.age ? <p className="errorForm" >{errors.age.message}</p> : null}

                    <label>
                        CPF:
                        <input 
                            type="number"
                            name="cpf"  
                            defaultValue={ data ? data.cpf : null }
                            ref={register({
                                required: "Enter your cpf",
                            })}
                        />
                    </label><br/>
                    {errors.cpf ? <p className="errorForm" >{errors.cpf.message}</p> : null}

                    <label>
                        E-mail:
                        <input 
                            type="text"
                            name="email"  
                            defaultValue={ data ? data.email : null }
                            ref={register({
                                required: "Enter your e-mail",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Enter a valid e-mail address",
                                },
                            })}
                        />
                    </label><br/>
                    {errors.email ? <p className="errorForm" >{errors.email.message}</p> : null}

                    <label>
                        País:
                        <input 
                            type="text"
                            name="country"  
                            defaultValue={ data ? data.country : null }
                            ref={register({
                                required: "Enter your country",
                                pattern: {
                                    value: /[a-zA-Z]+/,
                                    message: "Enter a valid country",
                                },
                            })}
                        />
                    </label><br/>
                    {errors.country ? <p className="errorForm" >{errors.country.message}</p> : null}


                    { 
                        Object.keys(data).length ? <input type="submit" value="Salvar Alterações" /> 
                            : <input type="submit" value="Cadastrar Cliente" />
                    
                    }
                    
                </form>
                <button onClick= {closeModal}>Close</button>  
            </div>
        </div>
    )
}

export default ModalForm;
