import './ContactForm.css';
import Portlet from '../../../../common/sharedComponents/Portlet/Portlet';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import toast from 'react-hot-toast';
import useRequest from '../../../../hooks/use-request';

type Props = {
    className?: string
}

const ContactForm = (props: Props) => {
    const {doRequest} = useRequest({
        url: 'https://send.pageclip.co/gHdcsjULZV7paJXn3efzrQpEpDWzSDej',
        method: 'POST'
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('name'),
            email: data.get('email'),
            message: data.get('message')
        });
        event.currentTarget.reset();

        const response = await doRequest({
            name: data.get('name'),
            email: data.get('email'),
            message: data.get('message')
        });


        console.log(response);

        toast.success('Your message has been sent to me, and I will get back to you as soon as possible. Thank you for reaching out, and I look forward to our conversation.',
            {
                duration: 4000
            });
    };

    return (
        <form className={'pageclip-form ' + props.className} onSubmit={handleSubmit}>
            <Portlet>
                <div className="relative p-3 field">
                    <input type="input" className="form_field py-1.5 px-0.5 w-full" placeholder="Name" name="name"
                           id="name" required/>
                    <label htmlFor="name" className="form_label">Name</label>
                </div>
                <div className="relative p-3 mt-5 field">
                    <input type="email" className="form_field py-1.5 px-0.5 w-full" placeholder="Email" name="email"
                           id="email" required/>
                    <label htmlFor="email" className="form_label">Email</label>
                </div>

                <div className="relative p-3 mt-5 field">
                    <textarea className="form_field py-1.5 px-0.5 w-full" rows={5} placeholder="Message" name="message"
                              id="message" required/>
                    <label htmlFor="message" className="form_label">Message</label>
                </div>

                <button className="see-project-button ml-3 mt-5 pageclip-form__submit" type="submit">
                  <span>
                      <FontAwesomeIcon icon={faPaperPlane} className="mr-2"/>
                    Send Message
                  </span>
                </button>
            </Portlet>
        </form>
    );
};

export default ContactForm;
