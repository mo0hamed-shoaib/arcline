"use client";

import React, { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class PrismErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("Prism WebGL Error:", error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      // Return custom fallback or default gradient
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback: beautiful gradient background
      return (
        <div className="h-full w-full bg-gradient-to-br from-background via-background/95 to-background/90" />
      );
    }

    return this.props.children;
  }
}

