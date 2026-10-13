import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import { getStoredSession } from '../lib/auth';

export function ProtectedAdminRoute({ children }: { children: ReactNode }) {
  const session = getStoredSession();

  if (!session) {
    return <Navigate to="/auth" replace />;
  }

  if (!session.isAdmin) {
    return (
      <div className="page-body">
        <div className="info-card">
          <h3>Accès refusé</h3>
          <p className="muted">Cette zone nécessite un compte administrateur explicitement validé.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
