import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Save, 
  Eye, 
  EyeOff, 
  AlertTriangle,
  CheckCircle,
  FileText,
  Settings,
  Globe,
  BarChart3
} from 'lucide-react';

interface CodeInjectionSettings {
  headerCode: string;
  footerCode: string;
  googleAnalytics: string;
  googleTagManager: string;
  facebookPixel: string;
  customCSS: string;
  customJS: string;
  enabled: boolean;
}

const CodeInjectionManager: React.FC = () => {
  const [settings, setSettings] = useState<CodeInjectionSettings>({
    headerCode: '',
    footerCode: '',
    googleAnalytics: '',
    googleTagManager: '',
    facebookPixel: '',
    customCSS: '',
    customJS: '',
    enabled: true
  });

  const [activeTab, setActiveTab] = useState('tracking');
  const [previewMode, setPreviewMode] = useState(false);

  useEffect(() => {
    // Load settings from localStorage
    const stored = localStorage.getItem('codeInjectionSettings');
    if (stored) {
      try {
        setSettings(JSON.parse(stored));
      } catch (e) {
        console.error('Error loading code injection settings:', e);
      }
    }
  }, []);

  useEffect(() => {
    // Apply code injection when settings change
    if (settings.enabled) {
      applyCodeInjection();
    } else {
      removeCodeInjection();
    }
  }, [settings]);

  const handleSave = () => {
    localStorage.setItem('codeInjectionSettings', JSON.stringify(settings));
    applyCodeInjection();
    alert('Code injection settings saved and applied successfully!');
  };

  const applyCodeInjection = () => {
    // Remove existing injected elements
    removeCodeInjection();

    if (!settings.enabled) return;

    // Apply Google Analytics
    if (settings.googleAnalytics) {
      const gaScript1 = document.createElement('script');
      gaScript1.async = true;
      gaScript1.src = `https://www.googletagmanager.com/gtag/js?id=${settings.googleAnalytics}`;
      gaScript1.setAttribute('data-injected', 'true');
      document.head.appendChild(gaScript1);

      const gaScript2 = document.createElement('script');
      gaScript2.setAttribute('data-injected', 'true');
      gaScript2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${settings.googleAnalytics}');
      `;
      document.head.appendChild(gaScript2);
    }

    // Apply Google Tag Manager
    if (settings.googleTagManager) {
      const gtmScript = document.createElement('script');
      gtmScript.setAttribute('data-injected', 'true');
      gtmScript.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${settings.googleTagManager}');
      `;
      document.head.appendChild(gtmScript);

      // GTM noscript fallback
      const gtmNoscript = document.createElement('noscript');
      gtmNoscript.setAttribute('data-injected', 'true');
      gtmNoscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${settings.googleTagManager}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
      document.body.insertBefore(gtmNoscript, document.body.firstChild);
    }

    // Apply Facebook Pixel
    if (settings.facebookPixel) {
      const fbScript = document.createElement('script');
      fbScript.setAttribute('data-injected', 'true');
      fbScript.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${settings.facebookPixel}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(fbScript);
    }

    // Apply custom CSS
    if (settings.customCSS) {
      const cssStyle = document.createElement('style');
      cssStyle.setAttribute('data-injected', 'true');
      cssStyle.innerHTML = settings.customCSS;
      document.head.appendChild(cssStyle);
    }

    // Apply custom JavaScript
    if (settings.customJS) {
      const jsScript = document.createElement('script');
      jsScript.setAttribute('data-injected', 'true');
      jsScript.innerHTML = settings.customJS;
      document.head.appendChild(jsScript);
    }

    // Apply header code
    if (settings.headerCode) {
      const headerDiv = document.createElement('div');
      headerDiv.setAttribute('data-injected', 'true');
      headerDiv.innerHTML = settings.headerCode;
      document.head.appendChild(headerDiv);
    }

    // Apply footer code
    if (settings.footerCode) {
      const footerDiv = document.createElement('div');
      footerDiv.setAttribute('data-injected', 'true');
      footerDiv.innerHTML = settings.footerCode;
      document.body.appendChild(footerDiv);
    }
  };

  const removeCodeInjection = () => {
    // Remove all injected elements
    const injectedElements = document.querySelectorAll('[data-injected="true"]');
    injectedElements.forEach(element => element.remove());
  };

  const tabs = [
    { id: 'tracking', name: 'Tracking & Analytics', icon: <BarChart3 className="h-4 w-4" /> },
    { id: 'custom', name: 'Custom Code', icon: <Code className="h-4 w-4" /> },
    { id: 'advanced', name: 'Advanced', icon: <Settings className="h-4 w-4" /> }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">Code Injection Manager</h2>
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={settings.enabled}
              onChange={(e) => setSettings(prev => ({ ...prev, enabled: e.target.checked }))}
              className="rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-gray-300">Enable Code Injection</span>
          </label>
          <button
            onClick={handleSave}
            className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
          >
            <Save className="h-4 w-4" />
            <span>Save & Apply</span>
          </button>
        </div>
      </div>

      {!settings.enabled && (
        <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="h-5 w-5 text-yellow-400" />
            <p className="text-yellow-300">
              Code injection is currently disabled. Enable it to apply tracking codes and custom scripts.
            </p>
          </div>
        </div>
      )}

      {/* Tab Navigation */}
      <div className="bg-gray-800 rounded-xl border border-gray-700">
        <div className="flex border-b border-gray-700 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors duration-300 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === 'tracking' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Google Analytics Tracking ID
                </label>
                <input
                  type="text"
                  value={settings.googleAnalytics}
                  onChange={(e) => setSettings(prev => ({ ...prev, googleAnalytics: e.target.value }))}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="G-XXXXXXXXXX or UA-XXXXXXXXX-X"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Enter your Google Analytics tracking ID to enable website analytics
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Google Tag Manager Container ID
                </label>
                <input
                  type="text"
                  value={settings.googleTagManager}
                  onChange={(e) => setSettings(prev => ({ ...prev, googleTagManager: e.target.value }))}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="GTM-XXXXXXX"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Google Tag Manager for advanced tracking and marketing tags
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Facebook Pixel ID
                </label>
                <input
                  type="text"
                  value={settings.facebookPixel}
                  onChange={(e) => setSettings(prev => ({ ...prev, facebookPixel: e.target.value }))}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="XXXXXXXXXXXXXXX"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Facebook Pixel for conversion tracking and advertising
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === 'custom' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Custom CSS
                </label>
                <textarea
                  value={settings.customCSS}
                  onChange={(e) => setSettings(prev => ({ ...prev, customCSS: e.target.value }))}
                  rows={8}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 font-mono text-sm"
                  placeholder="/* Custom CSS styles */
.custom-class {
  color: #3b82f6;
}"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Add custom CSS styles that will be applied site-wide
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Custom JavaScript
                </label>
                <textarea
                  value={settings.customJS}
                  onChange={(e) => setSettings(prev => ({ ...prev, customJS: e.target.value }))}
                  rows={8}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 font-mono text-sm"
                  placeholder="// Custom JavaScript code
console.log('Custom script loaded');"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Add custom JavaScript that will be executed on every page
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === 'advanced' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Header Code Injection
                </label>
                <textarea
                  value={settings.headerCode}
                  onChange={(e) => setSettings(prev => ({ ...prev, headerCode: e.target.value }))}
                  rows={8}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 font-mono text-sm"
                  placeholder="<!-- Code to be injected in <head> section -->
<meta name='custom-meta' content='value'>
<script>
  // Custom header script
</script>"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Code injected into the &lt;head&gt; section of every page
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Footer Code Injection
                </label>
                <textarea
                  value={settings.footerCode}
                  onChange={(e) => setSettings(prev => ({ ...prev, footerCode: e.target.value }))}
                  rows={8}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 font-mono text-sm"
                  placeholder="<!-- Code to be injected before </body> -->
<script>
  // Custom footer script
</script>"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Code injected before the closing &lt;/body&gt; tag
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Code Preview */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold flex items-center">
            <Eye className="h-5 w-5 mr-2 text-green-400" />
            Code Preview
          </h3>
          <button
            onClick={() => setPreviewMode(!previewMode)}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300"
          >
            {previewMode ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            <span>{previewMode ? 'Hide' : 'Show'} Preview</span>
          </button>
        </div>

        {previewMode && (
          <div className="space-y-4">
            {settings.googleAnalytics && (
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-green-400 mb-2">Google Analytics</h4>
                <code className="text-xs text-gray-300">
                  Tracking ID: {settings.googleAnalytics}
                </code>
              </div>
            )}

            {settings.googleTagManager && (
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-blue-400 mb-2">Google Tag Manager</h4>
                <code className="text-xs text-gray-300">
                  Container ID: {settings.googleTagManager}
                </code>
              </div>
            )}

            {settings.facebookPixel && (
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-purple-400 mb-2">Facebook Pixel</h4>
                <code className="text-xs text-gray-300">
                  Pixel ID: {settings.facebookPixel}
                </code>
              </div>
            )}

            {settings.customCSS && (
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-orange-400 mb-2">Custom CSS</h4>
                <pre className="text-xs text-gray-300 overflow-x-auto">
                  {settings.customCSS.substring(0, 200)}
                  {settings.customCSS.length > 200 && '...'}
                </pre>
              </div>
            )}

            {settings.customJS && (
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-red-400 mb-2">Custom JavaScript</h4>
                <pre className="text-xs text-gray-300 overflow-x-auto">
                  {settings.customJS.substring(0, 200)}
                  {settings.customJS.length > 200 && '...'}
                </pre>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="bg-blue-900/20 border border-blue-500/50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-400 mb-4">Usage Instructions</h3>
        <div className="space-y-3 text-blue-300 text-sm">
          <p>• <strong>Google Analytics:</strong> Enter your GA4 tracking ID (G-XXXXXXXXXX) or Universal Analytics ID (UA-XXXXXXXXX-X)</p>
          <p>• <strong>Google Tag Manager:</strong> Enter your GTM container ID (GTM-XXXXXXX) for advanced tracking setup</p>
          <p>• <strong>Facebook Pixel:</strong> Enter your Facebook Pixel ID for conversion tracking and advertising</p>
          <p>• <strong>Custom CSS:</strong> Add site-wide CSS styles that will override default styling</p>
          <p>• <strong>Custom JavaScript:</strong> Add custom JavaScript functionality that runs on every page</p>
          <p>• <strong>Header/Footer Code:</strong> Inject any HTML, CSS, or JavaScript into specific page locations</p>
        </div>
      </div>

      {settings.enabled && (
        <div className="bg-green-900/20 border border-green-500/50 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <p className="text-green-300">
              Code injection is active. All configured tracking codes and custom scripts are being applied to your website.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeInjectionManager;