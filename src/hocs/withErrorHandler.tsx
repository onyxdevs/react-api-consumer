import React, { Component } from 'react';

interface IErrorHandlerProps {}
interface IErrorHandlerState {
    error: boolean;
}
const withErrorHandler = (WrappedComponent: React.ComponentType) => {
    return class extends Component<IErrorHandlerProps, IErrorHandlerState> {
        constructor(props: {}) {
            super(props);
            this.state = {
                error: false
            };
        }

        static getDerivedStateFromError(error: Error) {
            return { error: true };
        }

        componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
            // show a modal or something...
            console.error('🔥 something went wrong.', error, errorInfo);
        }

        render() {
            if (this.state.error) {
                return (
                    <div className='error-handler'>
                        <h1>Something went wrong.</h1>
                    </div>
                );
            }

            return <WrappedComponent {...this.props} />;
        }
    };
};

export default withErrorHandler;
