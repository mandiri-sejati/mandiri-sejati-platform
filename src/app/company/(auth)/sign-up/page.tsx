'use client';

import SignUpFormStep1 from "./_components/step-1";
import { useState } from "react";
import SignUpFormStep2 from "./_components/step-2";

function SignUpPage() {
    const [step, setStep] = useState(0);

    const nextStep = () => {
        setStep((step) => step += 1);
    }
    const prevStep = () => {
        setStep((step) => step -= 1);
    }
    if (step === 0)
        return <SignUpFormStep1 nextStep={nextStep} />

    return <SignUpFormStep2 prevStep={prevStep} />
}

export default SignUpPage;