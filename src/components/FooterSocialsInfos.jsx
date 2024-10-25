
const FooterSocialsInfos = ( {children, className, copyToClipboard, text} ) => {

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
          .then(() => {
            alert('Скопировано в буфер обмена');
          })
          .catch(err => {
            console.error('Ошибка при копировании в буфер обмена', err);
          });
    }

    return(
        <p 
        onClick={copyToClipboard ? ()=> handleCopy() : null}
        className={`footer__paragraph ${className}`}
        >
            {children}
        </p>
    )
}

export default FooterSocialsInfos