<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:tei="http://www.tei-c.org/ns/1.0"
    exclude-result-prefixes="xs"
    version="2.0">
    
<!--    Deletes the teiHeader-->
    <xsl:template match="tei:teiHeader"></xsl:template>
    
<!--    Deletes all <am> -->
    <xsl:template match="tei:am"></xsl:template>
    
    <!--    Replaces the date element with the content of the @when attribute -->
    <xsl:template match="tei:date[@when]">
        <xsl:value-of select="./@when"/>
    </xsl:template>
    
<!--    Replaces the date element with the content of the @dur attribute and deletes capital letters-->
    <xsl:template match="tei:date[@dur]">
        <xsl:value-of select="replace(./@dur,'[A-Z]','')"/>
    </xsl:template>
    
    <!--    Deletes all ¶ -->
    <xsl:template match="text()">
        <xsl:value-of select="replace(.,'¶','')"/>
    </xsl:template>
    
</xsl:stylesheet>