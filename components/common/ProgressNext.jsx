'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function ProgressNext() {
    return (
        <ProgressBar
            height="4px"
            color="#1c54fa"
            options={{ showSpinner: false }
            }
            shallowRouting
        />
    );
}