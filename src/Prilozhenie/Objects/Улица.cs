﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Prilozhenie
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Улица.
    /// </summary>
    // *** Start programmer edit section *** (Улица CustomAttributes)

    // *** End programmer edit section *** (Улица CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("УлицаE", new string[] {
            "Наименование as \'Наименование\'",
            "Город as \'Город\'",
            "Город.Наименование as \'Наименование\'"}, Hidden=new string[] {
            "Город.Наименование"})]
    [MasterViewDefineAttribute("УлицаE", "Город", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [View("УлицаL", new string[] {
            "Наименование as \'Наименование\'",
            "Город.Наименование as \'Наименование\'"})]
    public class Улица : ICSSoft.STORMNET.DataObject
    {
        
        private string fНаименование;
        
        private IIS.Prilozhenie.Город fГород;
        
        // *** Start programmer edit section *** (Улица CustomMembers)

        // *** End programmer edit section *** (Улица CustomMembers)

        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Улица.Наименование CustomAttributes)

        // *** End programmer edit section *** (Улица.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Улица.Наименование Get start)

                // *** End programmer edit section *** (Улица.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Улица.Наименование Get end)

                // *** End programmer edit section *** (Улица.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Улица.Наименование Set start)

                // *** End programmer edit section *** (Улица.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Улица.Наименование Set end)

                // *** End programmer edit section *** (Улица.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Улица.
        /// </summary>
        // *** Start programmer edit section *** (Улица.Город CustomAttributes)

        // *** End programmer edit section *** (Улица.Город CustomAttributes)
        [PropertyStorage(new string[] {
                "Город"})]
        [NotNull()]
        public virtual IIS.Prilozhenie.Город Город
        {
            get
            {
                // *** Start programmer edit section *** (Улица.Город Get start)

                // *** End programmer edit section *** (Улица.Город Get start)
                IIS.Prilozhenie.Город result = this.fГород;
                // *** Start programmer edit section *** (Улица.Город Get end)

                // *** End programmer edit section *** (Улица.Город Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Улица.Город Set start)

                // *** End programmer edit section *** (Улица.Город Set start)
                this.fГород = value;
                // *** Start programmer edit section *** (Улица.Город Set end)

                // *** End programmer edit section *** (Улица.Город Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "УлицаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View УлицаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("УлицаE", typeof(IIS.Prilozhenie.Улица));
                }
            }
            
            /// <summary>
            /// "УлицаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View УлицаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("УлицаL", typeof(IIS.Prilozhenie.Улица));
                }
            }
        }
    }
}
