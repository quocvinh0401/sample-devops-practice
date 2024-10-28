interface EmailTemplateProps {
    name: string;
    phone: string;
    message: string;
}

const EmailTemplate = ({ name, phone, message }: EmailTemplateProps) => {
    return (
        <div>
            <div>
                {name} - {phone}
            </div>
            <div>{message}</div>
        </div>
    );
};
export default EmailTemplate;
