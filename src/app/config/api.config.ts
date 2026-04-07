
/**
 * Configuración global de la API para NovaDrive
 */
export const API_CONFIG = {

    useProduction: true,

    // URL de la API en Railway
    productionUrl: 'https://webautos-production.up.railway.app',

    /* 
     * Obtiene la URL base de la API
     */
    getBaseUrl(): string {
        return this.productionUrl;
    }
};
