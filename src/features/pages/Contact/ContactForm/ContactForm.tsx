import './ContactForm.css';
import Portlet from '../../../../common/sharedComponents/Portlet/Portlet';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import React, {useRef, useState} from 'react';
import toast from 'react-hot-toast';
import useRequest from '../../../../hooks/use-request';
import {z, ZodError} from 'zod';

type Props = {
    className?: string
}

const PayloadSchema = z.object({
    name: z.string().min(2, {message: 'Name must be at least 2 characters long.'}),
    email: z.string().email({message: 'Please enter a valid email address.'}),
    message: z.string().min(10, {message: 'Message must be at least 10 characters long.'})
});

type Payload = z.infer<typeof PayloadSchema> | null;

const ContactForm = (props: Props) => {
        const {doRequest} = useRequest({
            url: 'https://send.pageclip.co/gHdcsjULZV7paJXn3efzrQpEpDWzSDej',
            method: 'POST',
            onSuccess: () => {
                toast.success('Your message has been sent to me, and I will get back to you as soon as possible. Thank you for reaching out, and I look forward to our conversation.',
                    {
                        duration: 4000
                    });
                formRef.current?.reset();
            },
            onError: () => {
                toast.error('Something went wrong. Please try again later.');
            }
        });

        const [loading, setLoading] = useState(false);
        const [error, setError] = useState<ZodError<Object> | null>(null);

        const formRef = useRef<HTMLFormElement>(null);
        const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
            try {
                event.preventDefault();
                setLoading(true);
                setError(null);
                const data = new FormData(event.currentTarget);
                const payload: Payload = {
                    name: data.get('name') as string,
                    email: data.get('email') as string,
                    message: data.get('message') as string
                };

                const parsedPayload = PayloadSchema.safeParse(payload);
                if (!parsedPayload.success) {
                    setError(parsedPayload.error);
                    setLoading(false);
                    return;
                }

                await doRequest(parsedPayload.data);
                setLoading(false);
            } catch (e) {
                console.log(e);
                toast.error('Something went wrong. Please try again later.');
            }

        };

        return (
            <form className={'pageclip-form ' + props.className} onSubmit={handleSubmit} ref={formRef}>
                <Portlet>
                    <div className="relative p-3 field">
                        <input type="input" className="form_field py-1.5 px-0.5 w-full" placeholder="Name" name="name"
                               id="name"/>
                        <label htmlFor="name" className="form_label">Name</label>
                    </div>
                    <div className="relative p-3 mt-5 field">
                        <input type="text" className="form_field py-1.5 px-0.5 w-full" placeholder="Email" name="email"
                               id="email"/>
                        <label htmlFor="email" className="form_label">Email</label>
                    </div>

                    <div className="relative p-3 mt-5 field">
                    <textarea className="form_field py-1.5 px-0.5 w-full" rows={5} placeholder="Message" name="message"
                              id="message"/>
                        <label htmlFor="message" className="form_label">Message</label>
                    </div>

                    <button
                        className={`primary-button ml-3 mt-5 pageclip-form__submit ${loading ? 'pageclip-form__submit--loading' : ''}`}
                        type="submit"
                        disabled={loading}>
                        <span><FontAwesomeIcon icon={faPaperPlane} className="mr-2"/>Send Message</span>
                    </button>
                    <span className="text-red-500 text-sm mt-3 whitespace-pre-wrap">{error?.errors?.map(i => i.message).join('\n')}</span>
                </Portlet>
            </form>
        );
    }
;

export default ContactForm;
