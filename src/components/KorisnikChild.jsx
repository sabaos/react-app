export default function KorisnikChild({ime, godine, children})
{
    return(
        <div>
            <p>ime mog djeteta je {ime}, ima {godine} godina</p>
            <p>{children}</p>
        </div>
    )
}