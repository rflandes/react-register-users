import { AppJournalRouter } from './router/AppJournalRouter';
import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme';

export const JournalApp = () => {
  return (
    <AppTheme>
      <AppJournalRouter />
    </AppTheme>
  )
}
