import React from 'react';
import Input from '@material-ui/core/Input';

    export default (() => (
    <div>
        <Input
            id="inputtest"
            defaultValue=""
            inputProps={{
                'aria-label': 'Description',
            }}
        />
    </div>));