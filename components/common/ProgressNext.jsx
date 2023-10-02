'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function ProgressNext() {
    return (
        <ProgressBar
            height="4px"
            color="#000b2d"
            options={{ showSpinner: false }
            }
            shallowRouting
        />
    );
}