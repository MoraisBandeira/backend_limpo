import jest from "jest";
import { Email } from "./Usuario";

describe("Emails",()=>{
    it('Should be instance of Error',async ()=>{
        const mail = 'anderson.morais@top.com';
        const result = Email.create(mail)
        expect(result).toBeInstanceOf(Error);
    })

    it('Should be false',async ()=>{
        const mail = 'anderson.morais@top.com';
        const result = Email.isValidMail(mail)
        expect(result).toBe(false);
    })

    it('Should be false',async ()=>{
        const mail = 'anderson.morais@top.com';
        const result = Email.IsValidHost(mail)
        expect(result).toBe(false);
    })
})